function set_color(color_sel) {

    var main_scene = document.querySelector('a-scene');
    var splash_back = main_scene.querySelector('#splashback_model');

    splash_back.setAttribute('material', 'color', color_sel);

};
