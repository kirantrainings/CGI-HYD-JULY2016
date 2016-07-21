angular.module("products", []);

angular.module("products")
    .service("productSvc", function ($http, $q) {
        this.getProducts = function () {
            var products = [
      {         
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLr9uWKGkyjpZlV0buePwoxD7CvYcV8nL0Bc2hwFwYsxeK3UuFw",
                             "description": "Mens Tshirt",
                             "price": "1200",
                             "model": "Polo Neck T",
                             "category": "Men"      
        },
       {         
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkxUxxgNhuaATrMH2iuXEbxa3qmKmwhQScmRTk8b0OLMktcOxsZA",
                             "description": "Men's Tshirt liked by girls",
                             "price": "2000",
                             "model": "V Neck T",
                             "category": "Men"      
        },
       {         
                    "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuJt-fGuNTYRhvj4EcjJb3YErTrPWTG8Fwi_TouwVO3twvEaFN2g",
                             "description": "Men's Tshirt",
                             "price": "300",
                             "model": "fullSeeve Neck T",
                             "category": "Men"      
        },
       {         
                    "imageUrl": "https://fashionbuzzer.com/media/catalog/product/cache/1/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/d/n/dn.49396_1.jpg",
                             "description": "For my cute sweet daughter",
                             "price": 4000,
                             "model": "EthnicWear ",
                             "category": "Girls"      
        },
       {         
                    "imageUrl": "http://4.imimg.com/data4/VQ/SM/MY-335323/indian-bridal-wear-suits-250x250.jpg",
                             "description": "For my cute sweet daughter",
                             "price": 5000,
                             "model": "EthnicWear ",
                             "category": "Girls"      
        },
       {         
                    "category": "Men",
                             "price": "2000",
                             "discount": "20%",
                             "imageUrl": "http://static2.jassets.com/p/Lee-Navy-Blue-Solid-Regular-Fit-Jeans-28Macky29-7403-5339391-1-catalog_s.jpg",
                             "description": "Nice Tshirt"      
        },
       {         
                    "category": "Women",
                             "price": "40000",
                             "discount": "10%",
                             "imageUrl": "http://static3.jassets.com/p/Rain-26-Rainbow-Yellow-Printed-Anarkali-4559-3257612-1-catalog_s.jpg",
                             "description": "Ethnic wear"      
        },
       {         
                    "category": "Women",
                             "price": "50000",
                             "discount": "30%",
                             "imageUrl": "http://static1.jassets.com/p/Nayo-Multicoloured-Printed-Anarkali-4105-0666002-1-catalog_s.jpg",
                             "description": "Awesome dress"      
        }
   ];

            var dfd = $q.defer();
            dfd.resolve(products);
            /*$http.get("app/data/products.json")
                .then(function (response) {
                    dfd.resolve(response);
                }).catch(function (response) {
                    dfd.reject(response);
                })*/
            return dfd.promise;
        };

        var productsForCheckout = [];
        this.addProductForCheckout = function (item) {
            productsForCheckout.push(item);
        };
        this.getProductsForCheckout = function () {
            return productsForCheckout;
        }
    });


angular.module("products")
    .controller("productCtrl", function (productSvc, $scope, $rootScope) {
        productSvc.getProducts()
            .then(function (response) {
                $scope.products = response;
            })
            .catch(function (response, error) {
                console.log(response);
            });

        $scope.addToCart = function (item) {
            $rootScope.$broadcast("PRODUCT-ADDED", {
                data: item
            });
            productSvc.addProductForCheckout(item);
        };
    });


angular.module("products")
    .controller("cartCtrl", function (productSvc, $scope) {
        $scope.productsForCheckout = productSvc.getProductsForCheckout();
    })
