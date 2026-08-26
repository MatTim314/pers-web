#work #magistrMartin 






Problem:
*Add multipack functionality to EditProduct. Multipack means when a product is a collection of other product in a multiple. So a abc-XXL product might just be a taped together three pieces of abc product. We want to have the option of adding this information to any product by adding two new fields to the EditProduct page. Multipack-quantity and Multipack-originalProduct. *

Possible solution vectors:
- Modify the product table to contain two new columns, one for each field. Update the productMapper. Update the data model. This solution is the most straightforward but it also adds a lot of redundancy since the Product table already has like 95 columns and since we have only few products in XXL variant (currently, this might change) most of the rows in these columns would be empty. Also I feel like this should be a different table, idk, just intuition.
- Modify the EditProduct component to handle these two fields individually. Create endpoint on the server handling these two fields. This solution works by bypassing the current way of updating product info by sending separate request for getting this extra information. Works, but is also suboptimal because if reused for future additional attributes the server controller would be polluted with small endpoints, each handling a different attribute of a single class. This would be hard to maintain.
- Third solution. Remake the current way to update the product. Instead of creating the whole product on the client and then sending the entire product model to server with updated data, just get the product from the server and make updates precise, meaning everytime a single field updates on the product, send a update request with just that field. Would require a new endpoint on server capable of taking an attribute name and the value the attribute is supposed to have and also with the productId to allow server to identify to which product this change belongs to. Don't know how feasible this is, but it requires the most work (I think?) 