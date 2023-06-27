Vue.component('comp-heading', {
    template: `<h2 class='heading center'><slot></slot></h2>`,
});


Vue.component('change-Kitchen', {
    props: {},

    data() {
        return {
            heading: 'Let’s Get Solution for Building Construction Work of Kitchen',
            imgSrc: 'img/blog-kitchen.png',
            imgAlt: 'blog-kitchen',
            text: 'Aliquam eu sem vitae turpmaximus.posuere in.Contrarycto popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont loo even slightly believable. Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'
        }
    },
 
    template:
    `<div>
        <comp-heading class='textAlignLeft'> {{ heading }} </comp-headnig>
        <img class='imgFitBlock' :src="imgSrc" :alt="imgAlt">
        <p class='text textAlignLeft '> {{ text }} </p>
    </div>`
});

Vue.component('change-Bedroom', {
    props: {},

    data() {
        return {
            heading: 'Let’s Get Solution for Building Construction Work of Bedroom',
            imgSrc: 'img/blog-bedroom.png',
            imgAlt: 'blog-bedroom',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum facilis harum nostrum placeat perspiciatis excepturi veniam aliquam repellat itaque'
        }
    },

    template:
    `<div>
        <comp-heading class='textAlignLeft'> {{ heading }} </comp-headnig>
        <img class='imgFitBlock' :src="imgSrc" :alt="imgAlt">
        <p class='text textAlignLeft '> {{ text }} </p>
    </div>`
});

Vue.component('change-Building', {
    props: {},

    data() {
        return {
            heading: 'Let’s Get Solution for Building Construction Work of Building',
            imgSrc: 'img/blog-building.jpg',
            imgAlt: 'blog-Building',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum facilis harum nostrum placeat perspiciatis excepturi veniam aliquam repellat itaque'
        }
    },

    template:
        `<div>
        <comp-heading class='textAlignLeft'> {{ heading }} </comp-headnig>
        <img class='imgFitBlock' :src="imgSrc" :alt="imgAlt">
        <p class='text textAlignLeft '> {{ text }} </p>
    </div>`
});
Vue.component('change-Architecture', {
    props: {},

    data() {
        return {
            heading: 'Let’s Get Solution for Building Construction Work of Architecture',
            imgSrc: 'img/blog-architecture.jpg',
            imgAlt: 'blog-architecture',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum facilis harum nostrum placeat perspiciatis excepturi veniam aliquam repellat itaque'
        }
    },

    template:
        `<div>
        <comp-heading class='textAlignLeft'> {{ heading }} </comp-headnig>
        <img class='imgFitBlock' :src="imgSrc" :alt="imgAlt">
        <p class='text textAlignLeft '> {{ text }} </p>
    </div>`
});

Vue.component('change-Kitchen Planning', {
    props: {},

    data() {
        return {
            heading: 'Let’s Get Solution for Building Construction Work of Kitchen Planning',
            imgSrc: 'img/blog-kitchenPlanning.jpg',
            imgAlt: 'blog-Kitchen Planning',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum facilis harum nostrum placeat perspiciatis excepturi veniam aliquam repellat itaque'
        }
    },

    template:
        `<div>
        <comp-heading class='textAlignLeft'> {{ heading }} </comp-headnig>
        <img class='imgFitBlock' :src="imgSrc" :alt="imgAlt">
        <p class='text textAlignLeft '> {{ text }} </p>
    </div>`
});




