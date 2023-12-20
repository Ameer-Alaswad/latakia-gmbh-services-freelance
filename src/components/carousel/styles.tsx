export const carouselImageStyles = {
    objectFit: "cover",
    height: 700,
    display: "block",
    overflow: "hidden",
    width: "100%",
    position: 'relative',
}

export const carouselImagesNdTextContainer = {
    ...carouselImageStyles,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

export const carouselTextsContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "800px",
    textAlign: "center",
    transition: "opacity 0.5s ease",
    gap: "20px",
    marginTop: "60px",
    '@media (max-width: 750px)': {
        width: '90%',
    },
}

export const carouselTextOneStyles = {
    color: "white",
    transition: "opacity 0.5s ease",
    lineHeight: "60px",
    letterSpacing: "0.5px",
    fontSize: "23px",
    fontFamily: "'monospace','Arial', sans-serif",
    '@media (max-width: 750px)': {
        fontSize: '15px',
    },

}
export const carouselTextTwoStyles = {
    color: "white",
    fontSize: "50px",
    fontWeight: "bold",
    fontFamily: "'monospace','Arial', sans-serif",
    transition: "opacity 1s ease",
    '@media (max-width: 750px)': {
        fontSize: '30px',
    },
}
export const angebotButtonStyles = {
    backgroundColor: '#3c52b2',
    color: '#fff',
    border: '2px solid #3c52b2',
    borderRadius: '20px',
    padding: '10px 30px',
    fontFamily: "'monospace','Arial', sans-serif",
    '&:hover': {
        backgroundColor: 'transparent',
        border: '2px solid #fff',
    },
    transition: 'background-color 0.5s ease, border-color 0.5s ease',
} 