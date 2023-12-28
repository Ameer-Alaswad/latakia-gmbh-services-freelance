export const footerMailContainerStyles = {
    background: "linear-gradient(to right, #2b5876, #4e4376)",
    color: "#fff",
    padding: "2rem",
    borderTop: "1px solid #444",
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.2)",
    fontFamily: "Pacifico, sans-serif",
    transition: "background 0.5s",
    marginTop: "50px",

    "&:hover": {
        background: "linear-gradient(to right, #4e4376, #2b5876)",
    },
};

export const footerGridStyles = {
    display: "flex", alignItems: "center", flexWrap: "wrap",
};
export const companyTitleStyles = {
    color: "#ffa726",
    fontFamily: "arial, sans-serif",
    marginLeft: "10px",
    alignSelf: "center"
};
export const allRightsReservedContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    "@media (max-width: 639px)": {
        marginTop: "20px",
    },
};
export const allRightsReservedStyles = {
    fontFamily: "cursive, sans-serif",
    marginTop: "10px",

};
export const dividerStyles = { backgroundColor: "#444", marginY: "1rem" };
export const designedByStyles = {
    textAlign: "center",
    color: "#ccc",
    fontFamily: "cursive, sans-serif",
};
export const designerNameStyles = {
    color: "#bbdefb",
    transition: "color 0.3s",
};
export const familyFontCursive = { fontFamily: "cursive, sans-serif", fontWeight: "bold" }

export const productLogoTitleContainerStyles = {
    flex: 1.1,
    display: "flex",
    "@media (max-width: 639px)": {
        marginBottom: "20px",
    },
}