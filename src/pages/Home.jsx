import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Nav from "../components/Nav";

const Home = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");

  const createRoom = () => {
    if (!name.trim()) {
      toast.error("Enter your name first");
      return;
    }

    const id = Math.random().toString(36).substring(2, 8);

    toast.success("Room Created");

    setTimeout(() => {
      navigate(`/editor/${id}?name=${name}`);
    }, 800);
  };

  const joinRoom = () => {
    if (!name.trim()) {
      toast.error("Enter your name");
      return;
    }

    if (!roomId.trim()) {
      toast.error("Enter Room ID");
      return;
    }

    toast.success("Joining Room");

    setTimeout(() => {
      navigate(`/editor/${roomId}?name=${name}`);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* NAVBAR */}
      
      <Nav/>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
            Real-Time Collaborative
            <span className="text-blue-600"> Code Editor</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Create coding rooms, collaborate with teammates in real-time, and
            improve productivity with seamless code sharing.
          </p>

          {/* FEATURES */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <p className="text-gray-700">Real-time code synchronization</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <p className="text-gray-700">Multi-user collaboration rooms</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <p className="text-gray-700">Simple and fast room creation</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Join Collaboration Room
          </h2>

          {/* NAME */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-2 font-medium">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ROOM */}
          <div className="mb-7">
            <label className="block text-gray-700 mb-2 font-medium">
              Room ID
            </label>

            <input
              type="text"
              placeholder="Enter room id"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={createRoom}
              className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Create Room
            </button>

            <button
              onClick={joinRoom}
              className="w-1/2 bg-gray-800 hover:bg-black text-white py-3 rounded-lg font-semibold transition"
            >
              Join Room
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Secure • Fast • Collaborative
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
