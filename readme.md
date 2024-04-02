Original: https://www.instagram.com/p/C5L1VG-N10u/

* Passado para Sass.

Corrigir:
 - Conflito de margens entre os itens disparando efeito hover out
 - Conflito de margens ao dar focus em um item
 - Tremulência na imagem de um item ao dar focus


 "O comportamento descrito ocorre devido à natureza do seletor :hover e à forma como ele interage com os elementos adjacentes quando o mouse é movido entre eles. Isso pode causar um efeito "pulando" ou "quebrado" na animação devido à ativação e desativação repetida do :hover enquanto o mouse se move entre os elementos."