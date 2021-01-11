import materialMap from './MaterialIconMap';

const iconFontByName = (name: string) => {
  const materialCode = materialMap.get(name.toLowerCase());
  if (materialCode) {
    return {
      font: { fontFamily: 'MaterialIcons-Regular' },
      value: String.fromCharCode(materialCode),
    };
  }

  return;
};

export default iconFontByName;
