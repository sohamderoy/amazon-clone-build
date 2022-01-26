"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
;// CONCATENATED MODULE: ./src/components/Header.js




const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center bg-amazon_blue p-1 flex-grow py-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-2 flex items-center flex-grow sm:flex-grow-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "https://links.papareact.com/f90",
                            width: 150,
                            height: 40,
                            objectFit: "contain",
                            className: "cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none px-4",
                                type: "text"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.SearchIcon, {
                                className: "h-12 p-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "link",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "hello Soham"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-extrabold md:text-sm",
                                        children: "Account & Lists"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "link",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Returns"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-extrabold md:text-sm",
                                        children: "& Orders"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative link flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold",
                                        children: "4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ShoppingCartIcon, {
                                        className: "h-10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "hidden md:inline font-extrabold md:text-sm mt-2",
                                        children: "Basket"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "link flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.MenuIcon, {
                                className: "h-6 mr-1"
                            }),
                            "All"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "link",
                        children: "Prime Video"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "link",
                        children: "Amazon Business"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "link",
                        children: "Today's Deals"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hidden lg:inline-flex link",
                        children: "Electronics"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hidden lg:inline-flex link",
                        children: "Food & Grocery"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hidden lg:inline-flex link",
                        children: "Prime"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hidden lg:inline-flex link",
                        children: "Buy Again"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hidden lg:inline-flex link",
                        children: "Shopper Toolkit"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hidden lg:inline-flex link",
                        children: "Health & Personal Care"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
;// CONCATENATED MODULE: ./src/components/Banner.js




const Banner = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
                autoPlay: true,
                infiniteLoop: true,
                showStatus: false,
                showIndicators: false,
                showThumbs: false,
                interval: 5000,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            loading: "lazy",
                            src: "https://links.papareact.com/gi1",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            loading: "lazy",
                            src: "https://links.papareact.com/6ff",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            loading: "lazy",
                            src: "https://links.papareact.com/7ma",
                            alt: ""
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Banner = (Banner);

;// CONCATENATED MODULE: external "@heroicons/react/solid"
const solid_namespaceObject = require("@heroicons/react/solid");
;// CONCATENATED MODULE: external "react-currency-formatter"
const external_react_currency_formatter_namespaceObject = require("react-currency-formatter");
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Product.js





const MAX_RATING = 5;
const MIN_RATING = 1;
const Product = ({ id , title , price , description , category , image  })=>{
    const { 0: rating  } = (0,external_react_.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    const { 0: hasPrime  } = (0,external_react_.useState)(Math.random() < 0.5);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex flex-col m-5 bg-white z-30 p-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "absolute top-2 right-2 text-xs italic text-gray-400",
                children: category
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: image,
                height: 200,
                width: 200,
                objectFit: "contain"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "my-3",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex",
                children: Array(rating).fill().map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.StarIcon, {
                        className: "h-5 text-yellow-500"
                    })
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs my-2 line-clamp-2",
                children: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_currency_formatter_default()), {
                    quantity: price,
                    currency: "INR"
                })
            }),
            hasPrime && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-2 -mt-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "w-12",
                        src: "https://links.papareact.com/fdw",
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: "FREE Next-day Delivery"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "mt-auto button",
                children: "Add to Basket"
            })
        ]
    }));
};
/* harmony default export */ const components_Product = (Product);

;// CONCATENATED MODULE: ./src/components/ProductFeed.js



const ProductFeed = ({ products  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
        children: [
            products.slice(0, 4).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ jsx_runtime_.jsx(components_Product, {
                    id: id,
                    title: title,
                    price: price,
                    description: description,
                    category: category,
                    image: image
                }, id)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "md:col-span-full",
                src: "https://links.papareact.com/dyz"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:col-span-2",
                children: products.slice(4, 5).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ jsx_runtime_.jsx(components_Product, {
                        id: id,
                        title: title,
                        price: price,
                        description: description,
                        category: category,
                        image: image
                    }, id)
                )
            }),
            products.slice(5, products.length).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ jsx_runtime_.jsx(components_Product, {
                    id: id,
                    title: title,
                    price: price,
                    description: description,
                    category: category,
                    image: image
                }, id)
            )
        ]
    }));
};
/* harmony default export */ const components_ProductFeed = (ProductFeed);

;// CONCATENATED MODULE: ./src/pages/index.js





function Home({ products  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gray-100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Amazon Clone"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "max-w-screen-2xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Banner, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ProductFeed, {
                        products: products
                    })
                ]
            })
        ]
    }));
};
async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then((res)=>res.json()
    );
    return {
        props: {
            products
        }
    };
}


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(711)));
module.exports = __webpack_exports__;

})();