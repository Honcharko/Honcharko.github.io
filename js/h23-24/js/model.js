define(
    'model',
    [],
    function(){
        function Model(data) {

            this.data = data;

            this.addItem = function (item) {
                if (item.length === 0) {
                    return;
                }
                this.data.push(item);

                return this.data;
            };

            this.removeItem = function (item) {
                let index = this.data.indexOf(item);
                if (index === -1) {
                    return;
                }

                this.data.splice(index, 1);

                return this.data;
            };

            this.editItem = function (item, edit) {
                let index = this.data.indexOf(item);
                //console.log(index,edit,item, data);
                if (index === -1) {
                    return;
                }

                this.data.splice(index, 1, edit);

                return this.data;
            }

        }
        return Model;
    }
);
