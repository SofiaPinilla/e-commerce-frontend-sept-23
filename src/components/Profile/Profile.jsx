import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useEffect } from "react";
import { Card, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);
  useEffect(() => {
    getUserInfo();
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  if (!user) {
    return <Spin />;
  }
  return (
    <div>
      <h1>Profile</h1>
      <Card
        title={user.name}
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>{user.email}</p>
      </Card>
    </div>
  );
};

export default Profile;
