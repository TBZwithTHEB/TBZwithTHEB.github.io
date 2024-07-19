function toggleSubMenu(id) {
    var subMenu = document.getElementById(id);
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
    }
}

function showContent(contentId) {
    var content = document.getElementById('content');
    switch(contentId) {
        case 'menu1-sub1':
            content.innerHTML = '서브 메뉴 1-1의 내용입니다.';
            break;
        case 'menu1-sub2':
            content.innerHTML = '서브 메뉴 1-2의 내용입니다.';
            break;
        case 'menu1-sub3':
            content.innerHTML = '서브 메뉴 1-3의 내용입니다.';
            break;
        case 'menu2-sub1':
            content.innerHTML = '서브 메뉴 2-1의 내용입니다.';
            break;
        case 'menu2-sub2':
            content.innerHTML = '서브 메뉴 2-2의 내용입니다.';
            break;
        case 'menu2-sub3':
            content.innerHTML = '서브 메뉴 2-3의 내용입니다.';
            break;
        // 추가 서브 메뉴의 내용도 동일한 구조로 작성
        default:
            content.innerHTML = '세부 내용이 여기에 표시됩니다.';
    }
}
