// async call reference: https://stackoverflow.com/questions/49982058/how-to-call-an-async-function

import {supabase} from "../supabaseClient";
import {fetch_whole_table_asc_by_id} from "./table_data_helper";


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

            let raw_file_name = (images_info_list[image_index].name)
            let filename = raw_file_name.substring(0, raw_file_name.indexOf('.'))

            // here we are creating the rows of the items table and temporarily storing it into the local items table list
            local_item_table.push({
                item_name: filename,
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


// supplier table

let suppliers = [
    "Apple", "Amazon Basics", "Ecobee", "Air Bus", "Vivo", "UGreen", "Wallmart", "Samsung", "Cannon", "Epson", "Lenevo", "IBM", "Cisco", "Tim Hortons", "Axio"
]

export const generate_entries_of_supplier_table = async (table_name) => {

    let local_supplier_table = [] // declaring local supplier table
    for (const supplier_index in suppliers) {
        local_supplier_table.push({"supplier_name": suppliers[supplier_index]})
    }
    try {

        // pushing the local supplier table created with the rows to the remote supabase db
        // this bulk call will create the rows in the supabase remote table in oneshot
        const {error} = await supabase
            .from(table_name)
            .insert(local_supplier_table)

        if (error) {
            console.log(error.code)
            throw error
        }

    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("finally what to do?")
    }

}

// item supplier table
export const generate_entries_of_item_supplier_table = async (supplier_item_table_name, item_table_name, supplier_table_name, t) => {

    let local_item_supplier_table = []

    // fetch two tables - NOTE: Assuming the tables are fetched by the id ordered in ascending order
    let item_table_list = await fetch_whole_table_asc_by_id(item_table_name)
    let supplier_table_list = await fetch_whole_table_asc_by_id(supplier_table_name)

    let max_id_of_item_table = item_table_list[item_table_list.length - 1].id
    let min_id_of_item_table = item_table_list[0].id

    let max_id_of_supplier_table = supplier_table_list[supplier_table_list.length - 1].id
    let min_id_of_supplier_table = supplier_table_list[0].id


    if (0) {
        console.log(item_table_list);
        console.log(min_id_of_item_table);
        console.log(max_id_of_item_table);

        console.log(supplier_table_list);
        console.log(min_id_of_supplier_table);
        console.log(max_id_of_supplier_table);
    }

    // Generate a random number of items between 1 to 4 items - supplied by each supplier
    // The items supplied by each supplier is also randomly selected
    if (t) {
        // item_supplier_t table

        for (const supplier_index in supplier_table_list) {
            // console.log(supplier_table_list[supplier_index].id);
            let number_of_items_supplier_supplies = getRandomArbitrary(1, 4)
            for (let i = 0; i < number_of_items_supplier_supplies; i++) {
                local_item_supplier_table.push({
                    "supplier_id": supplier_table_list[supplier_index].id,
                    "item_id": getRandomArbitrary(min_id_of_item_table, max_id_of_item_table)
                })
            }
        }
        console.log(local_item_supplier_table);
    } else {
        // item_supplier table

        for (const supplier_index in supplier_table_list) {
            // console.log(supplier_table_list[supplier_index].id);
            let number_of_items_supplier_supplies = getRandomArbitrary(1, 1)
            for (let i = 0; i < number_of_items_supplier_supplies; i++) {
                local_item_supplier_table.push({
                    "supplier_name": supplier_table_list[supplier_index].supplier_name,
                    "item_name": item_table_list[getRandomArbitrary(0, item_table_list.length)].item_name
                })
            }
        }
        console.log(local_item_supplier_table);
    }

    try {

        // pushing the local item_supplier table created with the rows to the remote supabase db
        // this bulk call will create the rows in the supabase remote table in oneshot
        const {error} = await supabase
            .from(supplier_item_table_name)
            .insert(local_item_supplier_table)

        if (error) {
            console.log(error.code)
            throw error
        }

    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("finally what to do?")
    }

}

// order table
export const generate_entries_of_order_table = async (order_table_name, supplier_item_table_name) => {
    let local_order_table = []

    let item_supplier_table = await fetch_whole_table_asc_by_id(supplier_item_table_name)

    // console.log(item_supplier_table);

    for (const item_supplier_index in item_supplier_table) {
        local_order_table.push({
            "item_name": item_supplier_table[item_supplier_index].item_name,
            "supplier_name": item_supplier_table[item_supplier_index].supplier_name,
            "quantity": getRandomArbitrary(1, 1000),
            "fulfillment": getRandomArbitrary(0, 2)
        })
    }

    // console.log(local_order_table);

    try {

        // pushing the local order table created with the rows to the remote supabase db
        // this bulk call will create the rows in the supabase remote table in oneshot
        const {error} = await supabase
            .from(order_table_name)
            .insert(local_order_table)

        if (error) {
            console.log(error.code)
            throw error
        }

    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("finally what to do?")
    }
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

// export const add_to_asset_bucket = async () => {
//     try {
//         console.log("Uploading picture to storage")
//
//         let file = new FileReader();
//         file.r("../../assets/cannon.jpg");
//
//         const {data, error} = await supabase
//             .storage
//             .from("assets")
//             .upload("cannon.jpg", file, {cacheControl: "3600", upsert: false})
//
//         if (error) {
//             console.log(error.code)
//             throw error
//         }
//
//         if (data) {
//             console.log(data)
//         }
//     } catch (error) {
//         console.log(error.message)
//     } finally {
//         console.log("finally what to do?")
//     }
//
//
// }


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
