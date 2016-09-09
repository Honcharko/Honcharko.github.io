define(
    'controller',
    [],
    function(){
        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-del', removeItem);
            view.elements.listContainer.on('blur', '.item-edit', editItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }
            function removeItem() {
                var item = $(this).attr('data-item');

                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem(e) {
                model.editItem(this.parentElement.innerText.trim(), e.target.value);

                view.renderList(model.data);
            }
        }
        return Controller;
    }
);
