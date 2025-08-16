"use client";


import { useState, useEffect } from "react";
import { setAvailabilitySlots } from '@/actions/doctor';
import useFetch from '@/hooks/use-fetch';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Card ,CardHeader , CardTitle,CardContent,CardDescription} from "@/components/ui/card";
import { Clock, Plus, Loader2, AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const AvailabilitySettings = ({ slots }) => {
    // Show the form or hide by applying state
    const [showForm, setShowForm] = useState(true);
    // Apply Custom hook for server action
    const { loading, fn: submitSlots, data } = useFetch(setAvailabilitySlots);

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            startTime: "",
            endTime:"",
        }
    });
    return (
        <Card className="border-emerald-900/20">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                <Clock className="h-5 w-5 mr-2 text-emerald-400" />
                Availability Settings
                </CardTitle>
                <CardDescription>
                Set your daily availability for patient appointments
                </CardDescription>
            </CardHeader>
            <CardContent>
                {/* Current Availability Display */}
                {!showForm ? <></> : 
                
                <form
                // onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 border border-emerald-900/20 rounded-md p-4"
            >
                <h3 className="text-lg font-medium text-white mb-2">
                Set Daily Availability
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="startTime">Start Time</Label>
                    <Input
                    id="startTime"
                    type="time"
                    {...register("startTime", {
                        required: "Start time is required",
                    })}
                    className="bg-background border-emerald-900/20 cursor-pointer"
                    />
                    {errors.startTime && (
                    <p className="text-sm font-medium text-red-500">
                        {errors.startTime.message}
                    </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="endTime">End Time</Label>
                    <Input
                    id="endTime"
                    type="time"
                    {...register("endTime", { required: "End time is required" })}
                    className="bg-background border-emerald-900/20 cursor-pointer"
                    />
                    {errors.endTime && (
                    <p className="text-sm font-medium text-red-500">
                        {errors.endTime.message}
                    </p>
                    )}
                </div>
                </div>

                <div className="flex justify-end space-x-3 pt-2">
                <Button
                    type="button"
                    variant="outline"
                    // onClick={() => setShowForm(false)}
                    disabled={loading}
                    className="border-emerald-900/30 cursor-pointer"
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    disabled={loading}
                    className="bg-emerald-600 hover:bg-emerald-700 c"
                >
                    {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                    </>
                    ) : (
                    "Save Availability"
                    )}
                </Button>
            </div>
                </form>
                }
            </CardContent>
        </Card>
    )
}

export default AvailabilitySettings;