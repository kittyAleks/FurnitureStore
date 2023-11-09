import React from 'react';
import {GLView} from 'expo-gl';
import {Renderer} from 'expo-three';
import {Asset} from 'expo-asset';
// import {
//   Scene,
//   PerspectiveCamera,
//   SphereGeometry,
//   TextureLoader,
//   MeshBasicMaterial,
//   Mesh,
// } from 'three';
import * as THREE from 'three';

export const Home = () => {
  const onContextCreate = async gl => {
    const imageAsset = Asset.fromModule(require('../../../assets/glob.jpg'));
    await imageAsset.downloadAsync();
    console.log('imageAsset', imageAsset);

    const {drawingBufferWidth: width, drawingBufferHeight: height} = gl;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 0.1);
    camera.position.z = 5;
    console.log(camera.position);

    const renderer = new Renderer({gl});
    renderer.setSize(width, height);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const loader = new THREE.TextureLoader();
    const texture = loader.load(imageAsset.uri);
    console.log('texture', texture);

    const material = new THREE.MeshNormalMaterial();
    // const material = new THREE.MeshBasicMaterial({
    //   map: texture,
    // });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.005; // Вращение по оси X
      sphere.rotation.y += 0.005; // Вращение по оси Y

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    animate();
  };

  return (
    <GLView
      style={{flex: 1, borderWidth: 2, borderColor: 'red'}}
      onContextCreate={onContextCreate}
    />
  );
};
