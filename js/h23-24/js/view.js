define(
    'view',
    ['jquery'],
    function(){
        function View(model) {

             let init = () => {
                let wrapper = tmpl($('#wrapper-template').html());
                $('body').append(wrapper);

                this.elements = {
                    input: $('.item-val'),
                    addBtn: $('.item-add'),
                    listContainer: $('.item-list')
                };

                renderList(model.data);
            };

             let renderList = (data) => {
                let list = tmpl($('#list-template').html(), { data: data });
                this.elements.listContainer.html(list);
            };
            init();
        }
        return View;
    }
);
