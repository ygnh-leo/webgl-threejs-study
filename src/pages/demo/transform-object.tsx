import * as THREE from 'three'
import { useEffect } from 'react'

export default function TransformObject() {
	useEffect(() => {
		nativeJs()
	}, [])

	return (
		<div>
			<canvas id={'canvas.webgl'} />
		</div>
	)
}

function nativeJs() {
	console.log('Hello Three.js')

	// Canvas
	const canvas = document.getElementById('canvas.webgl') as HTMLCanvasElement

	// Scene
	const scene = new THREE.Scene()

	/*
	 * Objects
	 * */
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
	const mesh = new THREE.Mesh(geometry, material)
	mesh.position.z = 1 // @-01 1 指的是一个单位
	mesh.position.x = 1
	mesh.position.y = 0.2
	mesh.position.set(1, 0.2, 1) // 该方法与上方的写法等效
	mesh.scale.set(0.5, 0.5, 0.5) // 缩放物体
	mesh.rotation.set(0, 0, Math.PI * 0.25) // 旋转物体
	// scene.add(mesh)

	const group = new THREE.Group() // 创建一个组
	group.add(mesh) // 将物体添加到组中

	group.scale.set(0.5, 0.5, 0.5) // 缩放组

	scene.add(group) // 将组添加到场景中

	const sizes = {
		width: 800,
		height: 600,
	}

	// Camera
	const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
	camera.position.set(0.3, 1, 3)
	scene.add(camera)

	camera.lookAt(mesh.position) // 设置相机聚焦到物体上

	// 创建一个坐标轴试试效果
	const axesHelper = new THREE.AxesHelper()
	scene.add(axesHelper)

	// Renderer
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
	})

	renderer.setSize(sizes.width, sizes.height)
	renderer.render(scene, camera)

	//@-02 这个length 指的是距离
	console.log('length', mesh.position.length())

	//@-03 该方法返回两者间的距离
	console.log('length-camera', mesh.position.distanceTo(camera.position))
}
