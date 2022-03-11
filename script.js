$('.moon').on('click', function () {
    document.body.classList.toggle('dark-theme');
});
$('.tog').on('click', function () {
    $('.nav-links').toggleClass('item-v');
});
$('#main').on('click', function () {
    $('.nav-links').removeClass('item-v');
});
