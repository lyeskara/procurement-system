import {supabase} from "../supabaseClient";


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


export const find_asset_from_bucket = async () => {
    console.log("Getting picture from storage")

    const {data} = await supabase
        .storage
        .from('assets')
        .getPublicUrl('product_images/cannon.jpg')

    console.log(data.publicUrl);

    return data.publicUrl;
}
