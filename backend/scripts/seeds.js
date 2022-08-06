//TODO: seeds script should come here, so we'll be able to put some data in our local env
var Item = mongoose.model("Item");
var User = mongoose.model("User");
var Comments = mongoose.model("Comment")

var item = new items({
    Title : "Test item",
    Description: "First item in list",
    image: "no-image",

});
var users = new Users({
    username: "user " + i,
    email: "user"+i+"@"+i,
    
});
var item = new Comments({
    Body : "sample comment", 
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" }

});
