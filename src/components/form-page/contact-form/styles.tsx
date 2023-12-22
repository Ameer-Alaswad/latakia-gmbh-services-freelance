export const contactFormMainContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center"
}

export const contactFormStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    width: "600px",
    "@media (max-width: 866px)": {
        width: "90%",

    },

}

export const contactUsTitleStyles = {
    color: "#303030",
    fontFamily: "'monospace','Arial', sans-serif",
    fontWeight: "bold",
    marginTop: "80px",
    marginBottom: "50px"
}
export const contactFormSubmitButtonStyles = {
    backgroundColor: '#3c52b2',
    color: '#fff',
    border: '2px solid #3c52b2',
    borderRadius: '20px',
    padding: '10px 30px',
    marginTop: "20px",
    fontFamily: "'monospace','Arial', sans-serif",
    '&:hover': {
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        color: "black"
    },
    transition: 'background-color 0.5s ease, border-color 0.5s ease',
} 