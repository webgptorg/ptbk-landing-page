import { classNames } from '@/utils/classNames';
import { MeshBuilder } from 'babylonjs';
import { CSSProperties } from 'react';
import styles from './LoadingInteractiveImage.module.css';
import { useGraph } from './useGraph';

/**
 * Note: [🚒] This is taken from Promptbook.studio repository
 */

interface TorusInteractiveProps {
    /**
     * Width of the canvas
     */
    width: number;

    /**
     * Height of the canvas
     */
    height: number;

    /**
     * Optional CSS class name which will be added to root <canvas/> element
     */
    className?: string;

    /**
     * Optional CSS style which will be added to root <canvas/> element
     */
    style?: CSSProperties;
}

/**
 * Renders <canvas/> with a torus mesh and a camera that rotates around it
 * It is use as indicator that the app is working on something and as a "mascot" of the WebGPT app
 */
export function LoadingInteractiveImage(props: TorusInteractiveProps): JSX.Element {
    const { width, height, className, style } = props;

    const { sceneRef } = useGraph(
        ({ scene, camera, wireframeMaterial }) => {
            // TODO: [🍩] DRY

            const ribbon = MeshBuilder.CreateSphere(
                'ribbon',
                {
                    diameter: 3,
                    segments: 1,
                },
                scene,
            );
            /*
            const ribbon = MeshBuilder.CreateTorus(
                'ribbon',
                {
                    diameter: 1,
                    thickness: 0.5,
                    tessellation: 8,
                },
                scene,
            );
            */
            ribbon.material = wireframeMaterial;

            // Note: Rotate the the camera around the mesh
            scene.registerBeforeRender(() => {
                camera.alpha += 0.02;
            });
        },
        [
            /* Note: No dependencies - we want to have ONE continuous scene during the whole progress */
        ],
    );

    return (
        <canvas
            data-screenshot="not-loaded-yet" /* <- TODO: [🚂] DRY */
            ref={sceneRef}
            className={classNames(styles.LoadingInteractiveImage, className)}
            {...{ width, height, style }}
        />
    );
}
