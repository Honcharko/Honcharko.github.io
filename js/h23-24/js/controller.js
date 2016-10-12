define(
    'controller', [],
    () => class Controller {
        constructor(model, view) {
            this.data = data;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-del', removeItem);
            view.elements.listContainer.on('blur', '.item-edit', editItem);
        }

             addItem () {
                let newItem = view.elements.input.val();
                this.model.addItem(newItem);
                this.view.renderList(model.data);
                this.view.elements.input.val('');
            };
             removeItem () {
                let item = $(this).attr('data-item');

                this.model.removeItem(item);
                this.view.renderList(model.data);
            };

             editItem (e) {
                this.model.editItem(this.parentElement.innerText.trim(), e.target.value);

                this.view.renderList(model.data);
            };
    });


