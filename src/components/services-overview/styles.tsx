export const servicesImagesListMainContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};
export const servicesImagesListContainer = {
    height: 1000,
    "@media (max-width: 866px)": {
        height: "100%",
        display: "contents",
        width: "100%",
    },
};
export const serviceImageItemContainerStyles = {
    backgroundColor: "#F6F6F6",
    textAlign: "center",
    height: "180px",
};
export const servicesTitleStyles = {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "'monospace','Arial', sans-serif",
    marginBottom: "20px",
    fontSize: "50px",
    marginTop: "20px",

    "@media (max-width: 866px)": {
        fontSize: "30px",
    },
};
export const serviceImageTitleStyles = {
    fontWeight: "bold",
    marginTop: "5px",
    marginBottom: "5px",
};
export const serviceImageDescriptionStyles = {
    width: "90%",
    whiteSpace: "normal",
    margin: "0 auto",
    letterSpacing: "0.1em",
    lineHeight: "1.5",
};
export const imageListItemStyles = {
    margin: "30px",
    width: "350px",
} 