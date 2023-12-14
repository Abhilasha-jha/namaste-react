import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav Item
 * Body
 *  -Search
 *  - ReastauranContainer
 *     - RestaurantCard
 *          -Img
 *          - Name of Res,Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const color = {
  color: "rgba(2, 6, 12, 0.75)",
};
const padding = { paddingLeft: "10px" };
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines } = resData?.info;
  console.log(resData.info.id);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3 style={{ ...color, ...padding }}>{name}</h3>
      <h4 style={{ color: "#989898", fontSize: "12px", ...padding }}>
        {cuisines.join(", ")}
      </h4>
      <h4 style={{ ...color, ...padding }}>{avgRating} star</h4>
      <h4 style={{ ...color, ...padding }}>{sla.slaString}</h4>
    </div>
  );
};

const Resobject = {
  restaurants: [
    {
      info: {
        id: "427063",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Nirman Vihar",
        areaName: "Preet Vihar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "427063",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4900,
        },
        parentId: "547",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "16 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹179",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-nirman-vihar-preet-vihar-delhi-427063",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "55474",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Mandawali",
        areaName: "IP Extension",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.7,
        feeDetails: {
          restaurantId: "55474",
          fees: [
            {
              name: "BASE_TIME",
            },
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "721",
        avgRatingString: "3.7",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-mandawali-ip-extension-delhi-55474",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "24153",
        name: "Domino's Pizza",
        cloudinaryImageId: "equcikyumrd7kgferdfj",
        locality: "Aditya Arcade",
        areaName: "Preet Vihar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "24153",
          fees: [
            {
              name: "BASE_TIME",
            },
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "2456",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 30,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 02:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-aditya-arcade-preet-vihar-delhi-24153",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "413891",
        name: "Louis Burger",
        cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
        locality: "B Block",
        areaName: "Sector 4",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "413891",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 10800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 10800,
        },
        parentId: "22485",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 8.8,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "8.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1669879258/GFF_logo_new_xbycg6.png",
              description: "gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "gourmet",
                    imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/louis-burger-b-block-sector-4-delhi-413891",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "169483",
        name: "Bakingo",
        cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
        locality: "West Arjun Nagar",
        areaName: "Krishna Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "169483",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5700,
        },
        parentId: "3818",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/bakingo-west-arjun-nagar-krishna-nagar-delhi-169483",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "253981",
        name: "McDonald's",
        cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
        locality: "V3S Mall",
        areaName: "Laxmi Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["American"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "253981",
          fees: [
            {
              name: "BASE_TIME",
            },
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "630",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-v3s-mall-laxmi-nagar-delhi-253981",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "317998",
        name: "Khadak Singh Da Dhaba",
        cloudinaryImageId: "8144bf37947c161953f656308d1bfc30",
        locality: "Karkardooma",
        areaName: "Karkardooma",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Mughlai", "Snacks"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "317998",
          fees: [
            {
              name: "BASE_TIME",
            },
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "13170",
        avgRatingString: "3.9",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹349",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/khadak-singh-da-dhaba-karkardooma-delhi-317998",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "303555",
        name: "NIC Ice Creams",
        cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
        locality: "Sundar Block",
        areaName: "Shakarpur",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "303555",
          fees: [
            {
              name: "BASE_TIME",
            },
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "6249",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "16 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹149",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/nic-ice-creams-sundar-block-shakarpur-delhi-303555",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "15671",
        name: "Behrouz Biryani - Royal & Safe",
        cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
        locality: "R Block",
        areaName: "Shakarpur",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "15671",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4900,
        },
        parentId: "1803",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1669879258/GFF_logo_new_xbycg6.png",
              description: "gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "gourmet",
                    imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹110",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/behrouz-biryani-royal-and-safe-r-block-shakarpur-delhi-15671",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "15851",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Laxmi Nagar",
        areaName: "Shakarpur",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "15851",
          fees: [
            {
              name: "BASE_TIME",
            },
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "21809",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "20 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-laxmi-nagar-shakarpur-delhi-15851",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "62881",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId: "qwxytz94vjl3hqbdpeqo",
        locality: "R Block",
        areaName: "Laxmi Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "62881",
          fees: [
            {
              name: "BASE_TIME",
            },
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "4925",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹159",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-r-block-laxmi-nagar-delhi-62881",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "314445",
        name: "Natural Ice Cream",
        cloudinaryImageId: "sm5rshqg6veknumyh2ii",
        locality: "D Block",
        areaName: "Sector 2",
        costForTwo: "₹150 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.3,
        veg: true,
        feeDetails: {
          restaurantId: "314445",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 10800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 10800,
        },
        parentId: "2093",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 8.9,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          lastMileTravelString: "8.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/natural-ice-cream-d-block-sector-2-delhi-314445",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "29315",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "V3S Mall",
        areaName: "Laxmi Nagar",
        costForTwo: "₹350 for two",
        cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "29315",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "2",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "18 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-v3s-mall-laxmi-nagar-delhi-29315",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "87797",
        name: "Hira Sweets",
        cloudinaryImageId: "vicbanjyammdidibflvr",
        locality: "Laxmi Nagar",
        areaName: "Laxmi Nagar",
        costForTwo: "₹350 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Continental",
          "Bakery",
          "Street Food",
          "Sweets",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "87797",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4700,
        },
        parentId: "5155",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "17 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/hira-sweets-laxmi-nagar-delhi-87797",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "387312",
        name: "Wat-A-Burger! - India Ka Burger",
        cloudinaryImageId: "bngnkrkz1rxbifxpesfd",
        locality: "Krishna Nagar",
        areaName: "Krishna Nagar",
        costForTwo: "₹250 for two",
        cuisines: [
          "Burgers",
          "Fast Food",
          "Continental",
          "American",
          "Beverages",
          "Desserts",
        ],
        avgRating: 3.6,
        feeDetails: {
          restaurantId: "387312",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5000,
        },
        parentId: "471020",
        avgRatingString: "3.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 04:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/wat-a-burger-india-ka-burger-krishna-nagar-delhi-387312",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "365971",
        name: "Nirula's",
        cloudinaryImageId: "a66fa8f5befa65947d9e20f29a863ce0",
        locality: "Vikas Marg",
        areaName: "Preet Vihar",
        costForTwo: "₹500 for two",
        cuisines: [
          "Pizzas",
          "Burgers",
          "Ice Cream",
          "North Indian",
          "Fast Food",
          "Pastas",
          "Beverages",
        ],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "365971",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4700,
        },
        parentId: "1738",
        avgRatingString: "3.9",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-15 00:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/nirulas-vikas-marg-preet-vihar-delhi-365971",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "290202",
        name: "Chinese Hawker",
        cloudinaryImageId: "zqasumjx0ekzakjweili",
        locality: "Samaspur Road",
        areaName: "Pandav Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Pan-Asian", "Chinese", "Thai", "Seafood"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "290202",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5500,
        },
        parentId: "10634",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/chinese-hawker-samaspur-road-pandav-nagar-delhi-290202",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "538611",
        name: "EatFit",
        cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
        locality: "Vinod Nagar",
        areaName: "Mayur Vihar Phase 2",
        costForTwo: "₹270 for two",
        cuisines: [
          "Chinese",
          "Healthy Food",
          "Tandoor",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "538611",
          fees: [
            {
              name: "BASE_TIME",
            },
            {
              name: "BASE_DISTANCE",
              fee: 4200,
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4200,
        },
        parentId: "76139",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-14 23:45:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/eatfit-vinod-nagar-mayur-vihar-phase-2-delhi-538611",
        type: "WEBLINK",
      },
    },
  ],
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {Resobject.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
