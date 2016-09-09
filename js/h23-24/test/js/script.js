function Model(data){
    var self = this;
    self.data = data;

    self.addItem = function(item){
        if(item.length === 0){
            return;
        }
        self.data.push(item);

        return self.data;
    };

    self.removeItem = function(item){
        var index = self.data.indexOf(item);
        if(index === -1){
            return;
        }

        self.data.splice(index, 1);

        return self.data;
    };

    self.editItem = function(item, edit){
        var index = self.data.indexOf(item);
        if(index === -1){
            return;
        }

        self.data.splice(index, 1, edit);

        return self.data;
    }

}

function View(model){
    var self = this;

        function init(){
        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);

        self.elements = {
            input: $('.item-val'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list')
        };

        self.renderList(model.data);
    }

    self.renderList = function(data){
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
    };
    init();
}

function Controller(model, view){
    var self = this;

    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-del', removeItem);
    view.elements.listContainer.on('click', '.item-edit', editItem);

    function addItem(){
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }
    function removeItem(){
        var item = $(this).attr('data-item');

        model.removeItem(item);
        view.renderList(model.data);
    }

    function editItem(){



        model.editItem(self.oldItem, self.editVal);
        //view.renderList(model.data);


    }
    }



$(function () {
    var firstOpt = ['html', 'css', 'javascript', 'jquery', 'JSON'];
    var model = new Model(firstOpt);
    var view = new View(model);
    var controller = new Controller(model, view);



});