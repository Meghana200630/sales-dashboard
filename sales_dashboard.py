import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

st.title("Sales Data Visualization Dashboard")

data = {
    "Month": ["Jan","Feb","Mar","Apr","May"],
    "Sales": [200,300,250,400,350]
}

df = pd.DataFrame(data)

st.write(df)

st.bar_chart(df.set_index("Month"))

fig, ax = plt.subplots()
ax.plot(df["Month"], df["Sales"], marker='o')
st.pyplot(fig)