$(document).ready(function(){
    showCategories()
    showProducts()
})

function showCategories() {
    $.get('/categories', function(){
        $.get( "/categories", function( data ) {
            var html = ''
            data.forEach(function(category) {
                html = html + '<li><a href="#" onClick="showProducts('+category.id+')">'+category.name+'</a></li>'
            })
            $('#categories').html(html)
        });
    })
}

//todo: implement showProducts method
function showProducts(categoryId) {
    if(categoryId) {
        var url = '/categories/'+ categoryId +'/products';
    } else {
        var url = '/products'   
    }
    $.get(url, function(data) {
        var html = '';
        data.forEach(
            function(product) {
                html = html + '<div class="product">'
                  +  '<h2>'+product.name+'</h2>'
                  +  '<img src ='+product.image+'>'
                  +  '<p>'+product.description+'</p>'
                  +  '<p>Pret: '+product.price+'</p>'
                  +  '<p>Categorie: '+product.category.name+'</p>'
                + '</div>';
                
                html = html + '<h3>Product reviews</h3>'
                
                if(product.reviews) {
                    product.reviews.forEach(
                        function(reviewData) {
                            html = html + reviewData.name + ': ';
                            html = html + '<br>';
                            html = html + reviewData.score;
                            html = html + '<br>';
                            html = html + reviewData.content;
                            html = html + '<br>';
                            
                            html = html + '<br>';
                        }
                    )
                }
                
                
            }
        )
        $('#content').html(html);
    })
}