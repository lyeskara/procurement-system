import { supabase } from "../supabaseClient.js";

//Create new Order
async function createOrder(name, supplier, qty, fullfill) {
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert({
        item_name: name,
        supplier_name: supplier,
        quantity: qty,
        fulfillment: fullfill,
      })
      .single();
    if (error) throw error;
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
}

async function approveOrder(id) {
  try {
    const { data, error } = await supabase
      .from("orders")
      .update({
        fulfillment: true,
      })
      .eq("id", id);
    if (error) throw error;
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
}

async function denyOrder(id) {
  try {
    const { data, error } = await supabase.from("orders").delete().eq("id", id);
    if (error) throw error;
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
}

export { createOrder, denyOrder, approveOrder };
