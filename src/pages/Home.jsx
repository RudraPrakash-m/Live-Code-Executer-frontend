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
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h1>Collaborative Code Editor</h1>

      <div style={{ marginTop: "40px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={createRoom}
          style={{ marginRight: "10px", padding: "10px 20px" }}
        >
          Create Room
        </button>

        <button onClick={joinRoom} style={{ padding: "10px 20px" }}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
