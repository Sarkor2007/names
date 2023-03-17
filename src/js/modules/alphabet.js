export function abcFn() {
    const abcItem = document.querySelectorAll('.alphabet__list-item')

    for (let i = 0; i < abcItem.length; i++) {
        abcItem[i]?.addEventListener('click', function () {
            for (let j = 0; j < abcItem.length; j++) {
                abcItem[j].classList.remove('active')
            }
            abcItem[i].classList.add('active')
        })
    }

}