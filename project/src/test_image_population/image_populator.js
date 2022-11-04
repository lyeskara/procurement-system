// async call reference: https://stackoverflow.com/questions/49982058/how-to-call-an-async-function

import {supabase} from "../supabaseClient";

function getRandomArbitrary(min, max) {
    return Math.floor(Math.abs(Math.random() * (max - min) + min));
}


export const list_buckets = async () => {
    try {

        const {data, error} = await supabase
            .storage
            .listBuckets()

        if (error) {
            console.log(error.code)
            throw error
        }

        if (data) {
            console.log(data)
        }
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("finally what to do?")
    }

}

export const get_list_of_image_file_info_from_supabase_asset_bucket = async () => {
    try {
        console.log("List of files in supabase asset bucket")
        const {data, error} = await supabase
            .storage
            .from("assets")
            .list("product_images", {sortBy: {column: 'name', order: 'asc'}})

        if (error) {
            console.log(error.code)
            throw error
        }

        if (data) {
            // console.log(data)
            return data
        } else {
            return null
        }

    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("finally what to do?")
    }
}


export const get_public_url_of_a_image_from_supabase_storage_using_image_name = (image_name) => {

    const {data} = supabase
        .storage
        .from('assets')
        .getPublicUrl('product_images/' + image_name)

    if (data) {
        // console.log(data)
        return data
    } else {
        return null
    }
}


export const generate_entries_of_item_table_from_images = async (table_name) => {

    let img_debug = 1;

    console.log("Adding to items table")

    await (async () => {
        let local_item_table = [] // declaring local item table

        // let image_url_list = []

        // Getting a list containing all  image information from the storage bucket of supabase
        let images_info_list = await get_list_of_image_file_info_from_supabase_asset_bucket()

        if (img_debug) {
            console.log(images_info_list);
        }

        // Getting URL for each image info retrieved from the storage bucket of supabase
        let counter = 0
        for (const image_index in images_info_list) {
            // looping through each image info, to enable us to create the rows of the items table later on
            let image_url_info = get_public_url_of_a_image_from_supabase_storage_using_image_name(images_info_list[image_index].name)
            // image_url_list.push(image_url_info.publicUrl)


            // here we are creating the rows of the items table and temporarily storing it into the local items table list
            local_item_table.push({
                item_name: images_info_list[image_index].name,
                "item_price": getRandomArbitrary(5, 200),
                "product_image": image_url_info.publicUrl
            })

            if (img_debug) {
                console.log(counter + " : " + images_info_list[image_index].name)
                console.log(image_url_info.publicUrl)
            }
            counter = counter + 1
        }

        try {

            // pushing the local items table list created with the rows to the remote supabase db
            // this bulk call will create the rows in the supabase remote table in oneshot
            const {error} = await supabase
                .from(table_name)
                .insert(local_item_table)

            if (error) {
                console.log(error.code)
                throw error
            }

        } catch (error) {
            console.log(error.message)
        } finally {
            console.log("finally what to do?")
        }
    })()


}





// trials below

// export const find_asset_from_bucket = async () => {
//     console.log("Getting picture from storage")
//
//     const {data} = await supabase
//         .storage
//         .from('assets')
//         .getPublicUrl('product_images/cannon.jpg')
//
//     console.log(data.publicUrl);
//
//     return data.publicUrl;
//
// }

export const add_to_asset_bucket = async () => {
    try {
        console.log("Uploading picture to storage")

        let file = new FileReader();
        file.r("../../assets/cannon.jpg");

        const {data, error} = await supabase
            .storage
            .from("assets")
            .upload("cannon.jpg", file, {cacheControl: "3600", upsert: false})

        if (error) {
            console.log(error.code)
            throw error
        }

        if (data) {
            console.log(data)
        }
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("finally what to do?")
    }


}


//
// export const ImageList = () => {
//     const filenames = importAll(require.context('/public/assets/', false, /\.(png|jpe?g|svg)$/));
//     // const filenames = importAll(require('/src/assets'));
//     filenames.map(filename => {
//         console.log({filename});
//     });
//
//     // return (
//     //     <ul>
//     //         {
//     //             filenames.map(filename => {
//     //                 return <li>
//     //                     <img src={filename} alt={filename} />
//     //                 </li>
//     //             })
//     //         }
//     //     </ul>
//     // )
// }

// export default ImageList
