var data=null;  

// Em caso de sucesso
function onFulfilled(children) {
    var data = children[0].children;
    var style1 = ['border-primary', 'border-success', 'border-warning', 'border-danger'];
    var style2 = ['bg-primary text-white', 'bg-success text-white', 'bg-warning text-white', 'bg-danger text-white'];
    if(data.length != 0){
        var i = 0;
        var aux = '';
        for (child of data) {
            if(child.type == 'folder'){
                i ++;
                var subChildren = child.children;
                var pages = '';
                for (subChild of subChildren) {
                    pages = pages + '<p><a href="'+subChild.url+'">'+subChild.title+'</a></p>';
                }
                card = '<div class="col-3"><div class="card '+style1[i-1]+'"><div class="card-header '+style2[i-1]+'">'+child.title+'</div><div class="card-body">'+ pages +'</div></div></div>';
                if(i == 1){
                    aux =  aux + '<div class="row">'+card;
                }else if(i == 4){
                    aux = aux + card + '</div>';
                    i = 0;
                }else{
                    aux =  aux + card;
                }
            }
        }
        console.log(aux);
        document.getElementById('app').innerHTML = document.getElementById('app').innerHTML + aux;
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