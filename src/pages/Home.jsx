import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");

  const createRoom = () => {
    if (!name.trim()) {
      alert("Enter your name first");
      return;
    }

    const id = Math.random().toString(36).substring(2, 8);
    navigate(`/editor/${id}?name=${name}`);
  };

  const joinRoom = () => {
    if (!name.trim()) {
      alert("Enter your name");
      return;
    }

    if (!roomId.trim()) {
      alert("Enter room id");
      return;
    }

    navigate(`/editor/${roomId}?name=${name}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Collaborative Code Editor</h1>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Room Input */}
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={createRoom}
            className="w-1/2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-semibold"
          >
            Create Room
          </button>

          <button
            onClick={joinRoom}
            className="w-1/2 bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg font-semibold"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
