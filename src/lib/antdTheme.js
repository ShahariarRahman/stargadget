export const theme = {
  components: {
    token: {
      colorPrimary: "#ef4a23",
      colorPrimaryBorder: "#91caff",
    },
    Menu: {
      itemHoverBg: "#ef4a23", // menu+submenu button color
      itemHeight: 26, // menu+submenu button height
      itemSelectedColor: "#000", // selected menu+submenu: text color
      itemSelectedBg: "#ef4a2350", // selected menu+submenu: bg color
      itemPaddingInline: 0, // menu item space
      motionDurationMid: 0, // duration
      motionDurationSlow: 0, // duration
      horizontalLineHeight: "50px", // height of menu
      horizontalItemSelectedColor: "#fff", // underline color of menu
      activeBarHeight: 3, // underline height
      // itemMarginBlock: 0, // popup: margin
      itemMarginInline: 0, // popup: margin of each item
      subMenuItemBorderRadius: 0, // popup:submenu button radius
      dropdownWidth: 200, // popup/dropdown: width
      menuItemBorderRadius: 0, // popup/dropdown:submenu button radius
      itemBorderRadius: 0, // inline menu: border radius
    },
    Carousel: {
      dotHeight: 8,
      dotWidth: 30,
      dotActiveWidth: 30,
    },
    Breadcrumb: {
      iconFontSize: 13,
      itemColor: "#000",
      lastItemColor: "#666",
      linkColor: "",
      separatorColor: "#000",
      separatorMargin: 8,
    },
    Select: {
      optionSelectedBg: "#f1f3f5",
    },
    Pagination: {
      itemActiveBg: "#ef4a23",
      itemSize: 34,
      itemSizeSM: 34,
    },
    InputNumber: {
      paddingInline: 0, // padding x-axis none
      paddingBlock: 0, // padding y-axis none
      activeBorderColor: "", // input border none: active
      hoverBorderColor: "", // input border none: hover
      activeShadow: "", // input shadow none
      addonBg: "", // addon background none
    },
  },
};
