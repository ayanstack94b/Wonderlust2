"use client";

import { AlertDialog, Button } from "@heroui/react";

export function BookingCancelAlert({ bookingId }) {

    const handleDeleteBooking = async () => {
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data);
    }

    return (
        <AlertDialog>
            <Button variant="danger" className="border border-red-300 text-white bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold w-full">
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>the current Booking</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                                Cancel booking ?
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}