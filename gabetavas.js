$(document).ready(() => {
    $('#gray-twitter-button img').on('mouseenter', (event) => {
        $(event.currentTarget).attr("src", "images/greenTwitter.png")
    }).on('mouseleave', (event) => {
        $(event.currentTarget).attr("src", "images/grayTwitter.png")
    })
    
    $('#gray-instagram-button img').on('mouseenter', (event) => {
        $(event.currentTarget).attr("src", "images/greenInstagram.png")
    }).on('mouseleave', (event) => {
        $(event.currentTarget).attr("src", "images/grayInstagram.png")
    })
    
    $('#gray-linkedin-button img').on('mouseenter', (event) => {
        $(event.currentTarget).attr("src", "images/greenLinkedin.png")
    }).on('mouseleave', (event) => {
        $(event.currentTarget).attr("src", "images/grayLinkedin.png")
    })
    
    $('#black-twitter-button img').on('mouseenter', (event) => {
        $(event.currentTarget).attr("src", "images/greenTwitter.png")
    }).on('mouseleave', (event) => {
        $(event.currentTarget).attr("src", "images/blackTwitter.png")
    })
    
    $('#black-instagram-button img').on('mouseenter', (event) => {
        $(event.currentTarget).attr("src", "images/greenInstagram.png")
    }).on('mouseleave', (event) => {
        $(event.currentTarget).attr("src", "images/blackInstagram.png")
    })
    
    $('#black-linkedin-button img').on('mouseenter', (event) => {
        $(event.currentTarget).attr("src", "images/greenLinkedin.png")
    }).on('mouseleave', (event) => {
        $(event.currentTarget).attr("src", "images/blackLinkedin.png")
    })
    
    $('.projects-button').on('click', (event) => {
        $('#topSplashMessage').fadeOut(1000);
        $('#bottomSplashMessage').fadeOut(1000);
        $('#projectsSection').slideDown(2000);
    })

});