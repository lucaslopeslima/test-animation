console.log("JS is ON")
//Conversão da animação para JS
/* document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Adicionar classe de controle ao item atual
            item.classList.add('hovered');

            // Adicionar classe de controle aos itens adjacentes
            if (items[index + 1]) items[index + 1].classList.add('adjacent-hovered');
            if (items[index - 1]) items[index - 1].classList.add('adjacent-hovered');
        });

        item.addEventListener('mouseleave', () => {
            // Remover classe de controle do item atual
            item.classList.remove('hovered');

            // Remover classe de controle dos itens adjacentes
            if (items[index + 1]) items[index + 1].classList.remove('adjacent-hovered');
            if (items[index - 1]) items[index - 1].classList.remove('adjacent-hovered');
        });
    });
}); */

//Primeira tentativa, continua quebrando a animação
/* document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Adicionar classe de controle ao item atual
            item.classList.add('hovered');

            // Adicionar classe de controle aos 4 itens à direita
            for (let i = 1; i <= 4; i++) {
                if (items[index + i]) items[index + i].classList.add('adjacent-hovered-right-' + i);
            }

            // Adicionar classe de controle aos 4 itens à esquerda
            for (let i = 1; i <= 4; i++) {
                if (items[index - i]) items[index - i].classList.add('adjacent-hovered-left-' + i);
            }
        });

        item.addEventListener('mouseleave', () => {
            // Remover classe de controle do item atual
            item.classList.remove('hovered');

            // Remover classe de controle dos 4 itens à direita
            for (let i = 1; i <= 4; i++) {
                if (items[index + i]) items[index + i].classList.remove('adjacent-hovered-right-' + i);
            }

            // Remover classe de controle dos 4 itens à esquerda
            for (let i = 1; i <= 4; i++) {
                if (items[index - i]) items[index - i].classList.remove('adjacent-hovered-left-' + i);
            }
        });
    });
}); */

//Segunda tentativa, a animação está bem mais suave porém, ainda é possivel observer uns gliches ao transitar lentamente entre as imagens

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        let timeoutId = null; // Variável para armazenar o ID do timeout

        item.addEventListener('mouseenter', () => {
            // Limpar qualquer timeout existente
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null; // Limpar o ID do timeout
            }

            // Adicionar classe temporária ao item atual
            item.classList.add('hover-temp');

            // Adicionar classe de controle aos 4 itens à direita
            for (let i = 1; i <= 4; i++) {
                if (items[index + i]) items[index + i].classList.add('adjacent-hovered-right-' + i);
            }

            // Adicionar classe de controle aos 4 itens à esquerda
            for (let i = 1; i <= 4; i++) {
                if (items[index - i]) items[index - i].classList.add('adjacent-hovered-left-' + i);
            }
        });

        item.addEventListener('mouseleave', () => {
            // Adicionar um timeout para remover a classe temporária após um tempo
            timeoutId = setTimeout(() => {
                // Remover classe temporária do item atual
                item.classList.remove('hover-temp');

                // Remover classe de controle dos 4 itens à direita
                for (let i = 1; i <= 4; i++) {
                    if (items[index + i]) items[index + i].classList.remove('adjacent-hovered-right-' + i);
                }

                // Remover classe de controle dos 4 itens à esquerda
                for (let i = 1; i <= 4; i++) {
                    if (items[index - i]) items[index - i].classList.remove('adjacent-hovered-left-' + i);
                }
            }, 200);
        });
    });
});


