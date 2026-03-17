import streamlit as st
import pandas as pd
import plotly.express as px

# Configuración de la página
st.set_page_config(page_title="Mi Dashboard de Análisis", layout="wide")

st.title("📊 Analizador de Datos Interactivo")
st.markdown("Sube tu archivo CSV para visualizar los datos de forma instantánea.")

# Subida de archivo
uploaded_file = st.file_uploader("Elige un archivo CSV", type="csv")

if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)
    
    # Mostrar tabla de datos
    st.subheader("Vista previa de los datos")
    st.dataframe(df.head())

    # Sidebar para controles
    st.sidebar.header("Configuración de la Gráfica")
    columns = df.columns.tolist()
    
    x_axis = st.sidebar.selectbox("Eje X", columns)
    y_axis = st.sidebar.selectbox("Eje Y", columns)
    chart_type = st.sidebar.radio("Tipo de gráfico", ["Dispersión", "Líneas", "Barras"])

    # Generar gráfico según selección
    st.subheader(f"Gráfico de {chart_type}")
    
    if chart_type == "Dispersión":
        fig = px.scatter(df, x=x_axis, y=y_axis, color_continuous_scale="Viridis")
    elif chart_type == "Líneas":
        fig = px.line(df, x=x_axis, y=y_axis)
    else:
        fig = px.bar(df, x=x_axis, y=y_axis)

    st.plotly_chart(fig, use_container_width=True)
else:
    st.info("💡 Esperando a que subas un archivo CSV...")
