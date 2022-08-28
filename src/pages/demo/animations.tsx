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
	// Canvas
	const canvas = document.getElementById('canvas.webgl') as HTMLCanvasElement

	// Scene
	const scene = new THREE.Scene()

	// Objects
	const geometry = new THREE.BoxGeometry(1, 1, 1)
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
	const mesh = new THREE.Mesh(geometry, material)
	scene.add(mesh)

	// Camera
	const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height)
	camera.position.set(0, 0, 3)
	scene.add(camera)

	const sizes = {
		width: 800,
		height: 600,
	}

	// Renderer
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
	})

	renderer.setSize(sizes.width, sizes.height)
	renderer.render(scene, camera)

	// 这个 DEMO 的重点

	let time = Date.now()

	// 使用 tick 保证每一帧都会调用 update，流畅但并不是时间准确的
	const tick = () => {
		// 看看时间间隔
		const currentTime = Date.now()
		const delta = currentTime - time
		time = currentTime
		console.log(delta)

		mesh.rotation.y += 0.01
		renderer.render(scene, camera)
		window.requestAnimationFrame(tick) // 当下一帧准备好时，再次调用 tick 函数
	}
	// tick()

	// 使用 clock 来保证帧数流畅的同时，视图内容与时间同步
	const clock = new THREE.Clock()
	const tickOnClock = () => {
		const elapsedTime = clock.getElapsedTime()
		console.log(elapsedTime)
		mesh.rotation.y = elapsedTime * Math.PI
		renderer.render(scene, camera)
		window.requestAnimationFrame(tickOnClock)
	}
	// tickOnClock()

	// 做一个相机转圈，且一直对准方块的动画
	const tickOnCamera = () => {
		camera.lookAt(mesh.position)
		const elapsedTime = clock.getElapsedTime()
		camera.position.y = Math.sin(elapsedTime)
		camera.position.x = Math.cos(elapsedTime)
		renderer.render(scene, camera)
		window.requestAnimationFrame(tickOnCamera)
	}

	tickOnCamera()
}
