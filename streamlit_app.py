import streamlit as st
import pandas as pd
import plotly.express as px

# Configuración de la página
st.set_page_config(page_title="Video Game Sales Dashboard", layout="wide")

# --- CARGA DE DATOS ---
@st.cache_data
def load_data():
    # Reemplaza 'tu_ruta/video-games-sales-analysis-and-visualization.csv' con tu ubicación
    DATA_PATH = "video-games-sales-analysis-and-visualization.csv"
    df = pd.read_csv(https://www.kaggle.com/code/snanilim/video-games-sales-analysis-and-visualization?scriptVersionId=37623110&cellId=1)
    return df

try:
    df = load_data()
except FileNotFoundError:
    st.error("No se encontró el archivo. Por favor, verifica la ruta en el código.")
    st.stop()

# --- MENÚ LATERAL ---
st.sidebar.title("🎮 Navegación")
menu = st.sidebar.radio(
    "Selecciona una vista:",
    ["Resumen General", "Análisis por Categoría", "Buscador de Títulos"]
)

# --- VISTA: RESUMEN GENERAL ---
if menu == "Resumen General":
    st.title("📊 Análisis Global de Ventas")
    
    # Métricas principales
    col1, col2, col3 = st.columns(3)
    col1.metric("Ventas Totales", f"{df['Global_Sales'].sum():.2f}M")
    col2.metric("Lanzamientos", len(df))
    col3.metric("Promedio Ventas", f"{df['Global_Sales'].mean():.2f}M")

    # Gráfico de ventas por año
    st.subheader("Evolución Histórica de Ventas")
    sales_year = df.groupby('Year')['Global_Sales'].sum().reset_index()
    fig_line = px.line(sales_year, x='Year', y='Global_Sales', title="Ventas Globales por Año")
    st.plotly_chart(fig_line, use_container_width=True)

# --- VISTA: ANÁLISIS POR CATEGORÍA ---
elif menu == "Análisis por Categoría":
    st.title("📂 Análisis por Plataforma y Género")
    
    col_a, col_b = st.columns(2)
    
    with col_a:
        st.subheader("Top 10 Plataformas")
        top_platforms = df.groupby('Platform')['Global_Sales'].sum().nlargest(10).reset_index()
        fig_plat = px.bar(top_platforms, x='Platform', y='Global_Sales', color='Global_Sales')
        st.plotly_chart(fig_plat, use_container_width=True)
        
    with col_b:
        st.subheader("Distribución por Género")
        fig_pie = px.pie(df, values='Global_Sales', names='Genre', hole=0.4)
        st.plotly_chart(fig_pie, use_container_width=True)

# --- VISTA: BUSCADOR ---
elif menu == "Buscador de Títulos":
    st.title("🔍 Explorador de Datos")
    
    search = st.text_input("Busca un juego por nombre:")
    if search:
        filtered_df = df[df['Name'].str.contains(search, case=False, na=False)]
        st.write(f"Resultados encontrados: {len(filtered_df)}")
        st.dataframe(filtered_df)
    else:
        st.dataframe(df.head(100))
