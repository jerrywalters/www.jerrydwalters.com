function init() {
  function hideImg(img) {
    const bgImg = document.getElementsByClassName(`bg-img__${img}`)
    bgImg[0].id += 'bg-img__hidden'
  }
  // const stoveImg = document.getElementsByClassName('bg-img__stove')

  container = document.getElementById('container')

  // PerspectiveCamera( fov, aspect, near, far )
  camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 5000)
  camera.position.z = 50

  // scene
  scene = new THREE.Scene()

  // ambient light "globall illuminates all objects in the scene equally" -- no shadows
  // AmbientLight( color, intensity )
  var ambient = new THREE.AmbientLight(0x000000)
  scene.add(ambient)

  // DirectionalLight( hex, intensity )
  var directionalLight = new THREE.DirectionalLight(0xeeeeee)
  directionalLight.position.set(2, 1.8, 3.5)
  scene.add(directionalLight)

  // handles and keeps track of loaded and pending data
  var manager = new THREE.LoadingManager()
  manager.onProgress = function(item, loaded, total) {
  }

  // Texture( image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy )
  var texture = new THREE.Texture()

  var onProgress = function(xhr) {

  }

  var onError = function(xhr) {

  }

  // models

  var loader = new THREE.OBJLoader(manager)

  // load morty
  // loader.load(
  //   // resource path
  //   '../objects/morty_small.obj',
  //   // pass the loaded data to the onLoad function - assumed to be object
  //   // do some other shit
  //   function(obj) {
  //     obj.traverse(function(child) {
  //       if(child instanceof THREE.Mesh) {
  //         child.material.color.setHex(0x3c3c3c)
  //       }
  //     })
  //     // add object to scene
  //     obj.position.y = 1.8
  //     // obj.position.x = -2.5
  //     // obj.position.y = window.innerHeight/360
  //     obj.position.x = window.innerWidth/-510
  //     obj.position.z = 42
  //     obj.rotation.y -= 170 * Math.PI / 180
  //     // obj.rotation.x += 180 * Math.PI / 180
  //     obj.rotation.z -= 8 * Math.PI / 180

  //     var bbox = new THREE.BoxHelper( obj, 0x552200 )
  //     bbox.material.visible = false

  //     obj.name = 'morty'
  //     bbox.name = 'morty'
  //     bbox.projectName = 'resume'
  //     // obj.material.transparent = true
  //     // obj.material.opacity = 1
  //     scene.add(obj)
  //     scene.add(bbox)
  //     models.push(obj)
  //     boxes.push(bbox)

  //     morty = obj
  //     // setUpTween(stove)
  //   },
  //   // function called when download progresses
  //   onProgress,
  //   // function called when download error
  //   onError
  // )

  // load praylien
  loader.load(
    // resource path
    '../objects/range_small.obj',
    // pass the loaded data to the onLoad function - assumed to be object
    // do some other shit
    function(obj) {
      obj.traverse(function(child) {
        if(child instanceof THREE.Mesh) {
          child.material.color.setHex(0xfb4754)
        }
      })
      // add object to scene
      obj.position.y = 1
      // obj.position.x = 0.2
      // obj.position.y = window.innerHeight/2100
      // obj.position.x = window.innerWidth/4800
      obj.position.x = 0
      obj.position.z = 43
      obj.rotation.y -= 20 * Math.PI / 180
      obj.rotation.x += 28 * Math.PI / 180
      obj.rotation.z -= 12 * Math.PI / 180


      var bbox = new THREE.BoxHelper( obj, 0xffff00 )
      bbox.material.visible = false
      obj.name = 'praylien'
      bbox.name = 'praylien'

      bbox.projectName = 'portfolio-admin'
      scene.add(obj)
      scene.add(bbox)
      models.push(obj)
      boxes.push(bbox)

      praylien = obj

      // hide png of obj
      hideImg('stove')
    },
    // function called when download progresses
    // in this case defined globally
    onProgress,
    // function called when download error
    // also defined globally
    onError
  )

  // load atm
  loader.load(
    // resource path
    '../objects/atm_smallish.obj',
    // pass the loaded data to the onLoad function - assumed to be object
    // do some other shit
    function(obj) {
      obj.traverse(function(child) {
        if(child instanceof THREE.Mesh) {
          child.material.color.setHex(0x00cc66)
        }
      })
      // add object to scene
      obj.position.y = -0.1
      // obj.position.x = 1
      // obj.position.y = window.innerHeight/-6000
      obj.position.x = window.innerWidth/1372
      obj.position.z = 48
      obj.rotation.y -= -15 * Math.PI / 180
      obj.rotation.x += 30 * Math.PI / 180
      obj.rotation.z -= -6 * Math.PI / 180


      var bbox = new THREE.BoxHelper( obj, 0xffff00 )
      bbox.material.visible = false

      obj.name = 'atm'
      bbox.name = 'atm'

      bbox.projectName = 'capital-one'
      scene.add(obj)
      scene.add(bbox)
      models.push(obj)
      boxes.push(bbox)

      atm = obj

      hideImg('atm')
    },
    // function called when download progresses
    // in this case defined globally
    onProgress,
    // function called when download error
    // also defined globally
    onError
  )

  // load skelly
  loader.load(
    // resource path
    '../objects/skelly_small.obj',
    // pass the loaded data to the onLoad function - assumed to be object
    // do some other shit
    function(obj) {
      obj.traverse(function(child) {
        if(child instanceof THREE.Mesh) {
          child.material.color.setHex(0x4d79ff)
        }
      })
      // add object to scene
      obj.position.y = -1.55
      obj.position.x = window.innerWidth/-580
      obj.position.z = 45.5
      obj.rotation.y -= -40 * Math.PI / 180

      var bbox = new THREE.BoxHelper( obj, 0xffff00 )
      bbox.material.visible = false

      obj.name = 'skelly'
      bbox.name = 'skelly'

      bbox.projectName = 'portfolio-client'
      scene.add(obj)
      scene.add(bbox)
      models.push(obj)
      boxes.push(bbox)

      skelly = obj

      hideImg('skelly')
    },
    // function called when download progresses
    // in this case defined globally
    onProgress,
    // function called when download error
    // also defined globally
    onError
  )

  // var userOpts	= {
  //   range		: .035,
  //   duration	: 2500,
  //   delay		: 200,
  //   easing		: 'Elastic.EaseInOut'
  // }

  // function setUpTween(object) {
  //   var update = function(){
  //     object.position.x = current.x
  //     object.position.y = current.y
  //     console.log('updating!')
  //   }
  //   // var position = { x : 3, y: 1.2 }
  //   // var target = { x: -1, y: -2 }
  //   var current	= { x: -userOpts.range, y: -userOpts.range }

  //   TWEEN.removeAll()

  //   var tweenTo = new TWEEN.Tween(current)
  //     .to({x: +userOpts.range, y: +userOpts.range}, 1700)
  //     .delay(10)
  //     .easing(TWEEN.Easing.Sinusoidal.InOut)
  //     .onUpdate(update)

  //   var tweenBack = new TWEEN.Tween(current)
  //     .to({x: -userOpts.range, y: -userOpts.range}, 1700)
  //     .delay(10)
  //     .easing(TWEEN.Easing.Sinusoidal.InOut)
  //     .onUpdate(update)

  //     tweenTo.chain(tweenBack)
  //     tweenBack.chain(tweenTo)
  //     tweenTo.start()

  //   }


  //
  renderer = new THREE.WebGLRenderer({ alpha:true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor (0x000000, 0)
  container.appendChild(renderer.domElement)

  window.addEventListener('resize', onWindowResize, false)

}
