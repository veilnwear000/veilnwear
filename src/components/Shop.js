import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div style={{ padding: 24 }}>
      <h2>Shop</h2>
      <p>Welcome {user.email}. You can now browse and buy products.</p>
      <p>(This is a placeholder page — integrate your product pages here.)</p>
    </div>
  );
};

export default Shop;
