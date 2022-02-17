const NavigationItem = (navi, active) => {
    return(`
     <a class="list-group-item list-group-item-action ${active===navi.linkName ? 'active':''}" href="${navi.link}">
        <div class="row">
            <div class="col-2"><i class="${navi.fontAwesome}"></i></div>
            <div class="col-10 d-lg-none d-xl-block"><span>${navi.linkName}</span></div>
        </div>
    </a>
    `);
}
export default NavigationItem;