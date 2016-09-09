define(
    'model',
    [],
    function(){
        function Model(data) {
            var self = this;
            self.data = data;

            self.addItem = function (item) {
                if (item.length === 0) {
                    return;
                }
                self.data.push(item);

                return self.data;
            };

            self.removeItem = function (item) {
                var index = self.data.indexOf(item);
                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1);

                return self.data;
            };

            self.editItem = function (item, edit) {
                var index = self.data.indexOf(item);
                //console.log(index,edit,item, data);
                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1, edit);

                return self.data;
            }

        }
        return Model;
    }
);
