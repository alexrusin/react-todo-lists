const { Todo, List } = require('../../models/index');

exports.lists = async (req, res) => {

    const lists = await List.findAll({
        include: [Todo],
        where: { userId: req.user.id } 
    });
    res.status(200).json({
        userName: req.user.name,
        lists
    });
}; 

exports.create = async (req, res) => {

    const listName = req.body.listName.trim();

    await List.create({
        userId: req.user.id,
        name: listName
    });

    const lists = await List.findAll({
        include: [Todo],
        where: { userId: req.user.id } 
    });
    res.status(200).json({
        userName: req.user.name,
        lists
    });
}; 

exports.delete = async (req, res) => {

    const listId = req.params.id;
    console.log(listId);

    const list = await List.findByPk(listId,
    {
        include: [Todo],
    }
    );


    list.Todos.forEach( async (todo) => {
        await todo.destroy();
    });

    await list.destroy();

    const lists = await List.findAll({
        include: [Todo],
        where: { userId: req.user.id } 
    });
    res.status(200).json({
        userName: req.user.name,
        lists
    });
}; 