import {supabase} from "../supabaseClient";

export const fetch_single_entry = async (table_name,) => {

    try {
        let {data, error, status} = await supabase
            .from('Item')
            .select(`id, item_name`)
            .eq('id', 1)
            .single()

        if (error && status !== 406) {
            throw error
        }

        if (data) {
            console.log(data.id)
            console.log(data.item_name)
        }
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("finally what to do?")
    }
}

export const fetch_whole_table = async (table_name) => {

    try {
        let {data, error} = await supabase
            .from(table_name)
            .select()

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