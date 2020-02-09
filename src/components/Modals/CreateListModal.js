import React, { useState} from 'react'

export default function CreateListModal({setLists}) {
    const [listName, setListName] = useState('');

    const handleCreateList = () => {
        window.axios.post(process.env.REACT_APP_API_URL + '/api/lists', {
            listName
        })
        .then((response) => {
            setLists(response.data.lists);
            setListName('');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div className="mb-4">
                <div className="text-xl">Create List</div>
            </div>
            <div className="mb-8">
                <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                    placeholder="My Todo List"
                />
            </div>
            <div className="flex justify-center">
                <button 
                type="button"
                className="bg-green-400 rounded p-2 font-bold text-white text-sm mr-2"
                onClick={handleCreateList}
                >Create</button>
            </div>
        </>
    )
}
