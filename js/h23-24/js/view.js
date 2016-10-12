define(
    'view', ['jquery'],
    () => class View {
       constructor (model) {
           this.model = model;
           this.init();
    }
         init () {
                let wrapper = tmpl($('#wrapper-template').html());
                $('body').append(wrapper);

                this.elements = {
                    input: $('.item-val'),
                    addBtn: $('.item-add'),
                    listContainer: $('.item-list')
                };

                this.renderList(this.model.data);
            };

             renderList (data) {
                let list = tmpl($('#list-template').html(), { data: data });
                this.elements.listContainer.html(list);
            };

    });
