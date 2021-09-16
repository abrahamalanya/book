// Book
var book_portada = new Vue({
    el: '#book_portada',
    data: {
        image: 'https://picsum.photos/id/218/2000',
        title: 'אז הגיע הלילה של כוכב השביט הראשון',
        author: 'הלילה של',
        date: '2021'
    }
});


var header_title = new Vue({
    el: '#header_title',
    data: {
        title: 'Por la garrita'
    }
});

var book_data = new Vue({
    el: '#book_data',
    data: {
        stories: [
            {
                title: 'Nro. 01 ',
                image: "https://picsum.photos/id/11/430?grayscale",
                content: 'Me sorprendiste cuando jugamos Dancing.'
            },
            {
                title: 'Nro. 02',
                image: "https://picsum.photos/id/112/430?grayscale",
                // image: "https://images.unsplash.com/photo-1557951064-8ce1cf80ee72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
                content: 'Cuando escogiste Frape de Fresa.'
            },
            {
                title: 'Nro. 03',
                image: "https://picsum.photos/id/1015/430?grayscale",
                content: 'Te preocupaste por mi cuando me llego el disco en el dedo, auqnue no dolio.'
            },
            {
                title: 'Nro. 04',
                image: "https://picsum.photos/id/1016/430?grayscale",
                content: 'Conversar contigo en la bajada.'
            },
            {
                title: 'Nro. 05',
                image: "https://picsum.photos/id/1018/430?grayscale",
                content: 'Que me contaras de un trapito.'
            },
            {
                title: 'Nro. 06',
                image: "https://picsum.photos/id/1019/430?grayscale",
                content: 'Que te hayas dado cuenta de la sombra que llevaba en los ojos.'
            },
            {
                title: 'Nro. 07',
                image: "https://picsum.photos/id/1021/430?grayscale",
                content: 'Te veias muy bien con mi chalina.'
            },
            {
                title: 'Nro. 08',
                image: "https://picsum.photos/id/1028/430?grayscale",
                content: 'El abrazito.'
            },
            {
                title: 'Nro. 09',
                image: "https://picsum.photos/id/1038/430?grayscale",
                content: 'Que me digas niña.'
            },
            {
                title: 'Nro. 10',
                image: "https://picsum.photos/id/1037/430?grayscale",
                content: 'Tu sinceridad cuando hablamos.'
            },
            {
                title: 'Nro. 11',
                image: "https://picsum.photos/id/1041/430?grayscale",
                content: 'uwu'
            },
            {
                title: 'Nro. 12',
                image: "https://picsum.photos/id/216/430?grayscale",
                content: 'Me encanto al lugar que me llevaste (Frapego).'
            },
            {
                title: 'Nro. 13',
                image: "https://picsum.photos/id/202/430?grayscale",
                content: 'Me encanto cuando me cogiste de la cintura y me cambiaste de sitio para jugar (dancing).'
            },
            {
                title: 'Nro. 14',
                image: "https://picsum.photos/id/199/430?grayscale",
                content: 'Tu manera de ser, me transporta a otro mundo.'
            },
            {
                title: 'Nro. 15',
                image: "https://picsum.photos/id/195/430?grayscale",
                content: 'Las correcciones que me sueles hacer!'
            },
            {
                title: 'Nro. 16',
                image: "https://picsum.photos/id/188/430?grayscale",
                content: 'Eres la primera que me dice, mita mita.'
            },
            {
                title: 'Nro. 17',
                image: "https://picsum.photos/id/191/430?grayscale",
                content: 'Estar asustado por si no llegaba a casa.'
            },
            {
                title: 'Nro. 18',
                image: "https://picsum.photos/id/190/430?grayscale",
                content: 'Verte bailar.'
            },
            {
                title: 'Nro. 19',
                image: "https://picsum.photos/id/164/430?grayscale",
                content: 'El saludo y despedida, inolvidable.'
            },
            {
                title: 'Nro. 20',
                image: "https://picsum.photos/id/16/430?grayscale",
                content: 'Conocer a la familia, (Jóse, Divaza, Blanquita).'
            },
            {
                title: 'Nro. 21',
                image: "https://picsum.photos/id/155/430?grayscale",
                content: 'Resolver problemas de admisión.'
            },
            {
                title: 'Nro. 22',
                image: "https://picsum.photos/id/154/430?grayscale",
                content: 'Ser tu fotografo.'
            },
            {
                title: 'Nro. 23',
                image: "https://picsum.photos/id/149/430?grayscale",
                content: 'Lo primero que vi, tus ojos.'
            }
        ]
    }
});