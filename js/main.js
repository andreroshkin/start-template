Vue.component('my-component', {
    template: '<div>Пользовательский компонент!</div>'
})
new Vue({
    el: '#app',
    delimiters: ["((","))"],
})