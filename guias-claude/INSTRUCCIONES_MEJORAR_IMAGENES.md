# 📱 Instrucciones: Mejorar Imágenes de Tarjetas en Mobile

**Para: Bruno (Programmer)**
**Asunto: Ajustar imágenes de producto cards en versión mobile**

---

## 🔍 PROBLEMA ACTUAL

En mobile (375px - 480px), las imágenes de las tarjetas de productos se ven **desajustadas o cortadas** porque:
- Las imágenes tienen diferentes proporciones de aspecto
- El contenedor tiene altura fija (100%)
- `object-fit: cover` está cortando partes importantes

---

## ✅ SOLUCIONES

### **OPCIÓN 1: Usar `object-fit: contain` (RECOMENDADO - Menos invasivo)**

**Qué hace:** Muestra la imagen completa sin cortes, con espacio en blanco si es necesario.

**Dónde editar:** `landing.html`, línea ~770

**Busca este código:**
```css
.course-visual {
    width: 100% !important;
    height: 100% !important;
    background-size: cover;
    background-position: center;
}
```

**Cámbialo a:**
```css
.course-visual {
    width: 100% !important;
    height: 100% !important;
    background-size: contain;  /* ← CAMBIAR DE "cover" A "contain" */
    background-position: center;
    background-repeat: no-repeat;  /* ← AGREGAR ESTA LÍNEA */
}
```

**Resultado:** Imágenes completas, sin cortes. Puede haber espacio blanco arriba/abajo.

---

### **OPCIÓN 2: Aumentar altura del contenedor (Si quieres más espacio)**

**Dónde editar:** `landing.html`, línea ~748

**Busca:**
```css
.course-card {
    min-height: 140px;  /* ← AUMENTAR ESTE VALOR */
}
```

**Cámbialo a:**
```css
.course-card {
    min-height: 160px;  /* O 180px si prefieres más grande */
}
```

**Resultado:** Más espacio para las imágenes sin cortar.

---

### **OPCIÓN 3: Ajustar proporción imagen/contenido (Más radical)**

Si quieres que la imagen ocupe más espacio:

**Busca:**
```css
.course-card {
    grid-template-columns: 38% 1fr !important;  /* ← Imagen 38%, contenido 62% */
}
```

**Cámbialo a:**
```css
.course-card {
    grid-template-columns: 45% 1fr !important;  /* Imagen 45%, contenido 55% */
}
```

O:
```css
.course-card {
    grid-template-columns: 50% 1fr !important;  /* Imagen 50%, contenido 50% */
}
```

**Resultado:** Imagen más grande en mobile.

---

## 🎯 PASOS PARA IMPLEMENTAR

1. **Abre `landing.html` en tu editor**
2. **Ve a la línea ~770** (busca `@media (max-width: 768px)`)
3. **Busca el bloque `.course-visual` dentro de ese media query**
4. **Aplica la OPCIÓN 1** (la más segura)
5. **Guarda el archivo**
6. **Prueba en mobile:** Abre en navegador → F12 → Vista mobile (375px)
7. **Si se ve bien, sube a Hostinger vía SFTP**

---

## 📋 CHECKLIST FINAL

- [ ] Imagen visible sin cortes
- [ ] Mantiene proporción (no distorsionada)
- [ ] Se ve bien en 375px, 480px y 768px
- [ ] Contenido de texto no desaparece
- [ ] Botón "Ver detalles" sigue visible
- [ ] Precio se ve correctamente

---

## 💡 PRUEBA RÁPIDA

Después de cambiar, abre DevTools (F12) en Chrome:
1. Ve a Device Toolbar (Ctrl+Shift+M)
2. Selecciona "iPhone SE" o "Mobile" (375px)
3. Scrollea a la sección de cursos
4. Verifica que las imágenes se vean bien

---

## 🆘 SI ALGO SALE MAL

Si las imágenes se ven peor, regresa a la versión anterior:
- `git checkout landing.html` (en terminal, si tienes git)
- O restaura el archivo manualmente

---

**Preguntas:** Contacta a Egallardo
