var data=null;  

// Em caso de sucesso
function onFulfilled(children) {
    var data = children[0].children;
    if(data.length != 0){
        var i = 0;
        for (child of data) {
            if(child.type == 'folder'){
                i ++;
                var subChildren = child.children;
                var pages = '';
                for (subChild of subChildren) {
                    pages = pages + '<p><a href="'+subChild.url+'">'+subChild.title+'</a></p>';
                }
                card = '<div class="col-3"><div class="card"><div class="card-header">'+child.title+'</div><div class="card-body">'+ pages +'</div></div></div>';
                document.getElementById('app').innerHTML = document.getElementById('app').innerHTML + card;
            }
        }
    }
}

// Em caso de erro
function onRejected(error) {
    console.log(`An error: ${error}`);
}

function  getlink(id){
    var pages = browser.bookmarks.getChildren(id);
    return pages;
}


var gettingChildren = browser.bookmarks.getSubTree("unfiled_____");
gettingChildren.then(onFulfilled, onRejected);





/*
if(children.length != 0){
        var aux = '';
        for (child of children) {
            var card = '';
            console.log(child.title);
            if(child.type == 'folder'){
                getlink(child.id).then(function(links){
                    var pages = '';
                    for (link of links) {
                        pages = pages + '<p><a href="'+link.url+'">'+link.title+'</a></p>';
                    }
                    card = '<div class="col-3"><div class="card"><div class="card-header">'+child.title+'</div><div class="card-body">'+ pages +'</div></div></div>';
                    document.getElementById('app').innerHTML = document.getElementById('app').innerHTML + card;
                });
            }
        }
    }
 */